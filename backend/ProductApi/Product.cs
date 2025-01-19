public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty; // Default value to avoid null
    public string Description { get; set; } = string.Empty; // Default value to avoid null
    public int Quantity { get; set; }
    public decimal Price { get; set; }
}
