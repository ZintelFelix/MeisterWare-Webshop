// Program.cs
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// --- DB: ConnectionString konfigurierbar (ENV > appsettings > Fallback) ---
var connString =
    builder.Configuration.GetConnectionString("Default")
    ?? Environment.GetEnvironmentVariable("ConnectionStrings__Default")
    ?? "Data Source=products.db"; // lokal als Fallback

builder.Services.AddDbContext<ProductDbContext>(options =>
    options.UseSqlite(connString));

// --- REST wie gehabt ---
builder.Services.AddSingleton<List<Order>>();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Product API", Version = "v1", Description = "API for managing products" });
});

// CORS: erstmal offen lassen (bei Vercel-Proxy unkritisch). Später einschränken.
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy => policy
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader());
});

var app = builder.Build();

// DB-Migration ausführen (wie gehabt)
using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<ProductDbContext>();
    dbContext.Database.Migrate();
}

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();
app.UseAuthorization();
app.MapControllers();
app.Run();
