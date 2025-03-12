using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class OrderController : ControllerBase
{
    private static List<Order> orders = new List<Order>();

    [HttpGet]
    public IActionResult GetOrders()
    {
        return Ok(orders);
    }

    [HttpPost]
    public IActionResult CreateOrder([FromBody] Order order)
    {
        order.Id = orders.Count + 1;
        order.CreatedAt = DateTime.UtcNow;
        orders.Add(order);
        return Ok(order);
    }
}
