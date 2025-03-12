public class Order
{
    public int Id { get; set; }
    public List<int> ProductIds { get; set; } = new List<int>();
    public decimal TotalPrice { get; set; }
    public string Status { get; set; } = "Pending"; // Status: Pending, Shipped, Delivered
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
