using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class ProductController : ControllerBase
{
    private readonly ProductDbContext _dbContext;

    public ProductController(ProductDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpGet]
    public IActionResult GetProducts()
    {
        var products = _dbContext.Products.ToList();
        return Ok(products);
    }

    [HttpPost]
    public IActionResult AddProduct([FromBody] Product product)
    {
        if (product == null) return BadRequest("Invalid product data");

        product.CreatedAt = DateTime.UtcNow;
        _dbContext.Products.Add(product);
        _dbContext.SaveChanges();
        return Ok(product);
    }

    [HttpPut("{id}")]
    public IActionResult UpdateProduct(int id, [FromBody] Product updatedProduct)
    {
        var product = _dbContext.Products.FirstOrDefault(p => p.Id == id);
        if (product == null) return NotFound();

        product.Name = updatedProduct.Name;
        product.Description = updatedProduct.Description;
        product.Quantity = updatedProduct.Quantity;
        product.Price = updatedProduct.Price;
        product.ImageUrl = updatedProduct.ImageUrl;
        product.Category = updatedProduct.Category;
        product.Rating = updatedProduct.Rating;
        product.ReviewCount = updatedProduct.ReviewCount;
        product.Featured = updatedProduct.Featured;

        _dbContext.SaveChanges();
        return Ok(product);
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteProduct(int id)
    {
        var product = _dbContext.Products.FirstOrDefault(p => p.Id == id);
        if (product == null) return NotFound();

        _dbContext.Products.Remove(product);
        _dbContext.SaveChanges();
        return NoContent();
    }
}
