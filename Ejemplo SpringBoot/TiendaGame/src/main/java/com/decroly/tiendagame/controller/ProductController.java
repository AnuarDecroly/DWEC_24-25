package com.decroly.tiendagame.controller;

import java.util.Date;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.decroly.tiendagame.model.Product;
import com.decroly.tiendagame.service.TiendaService;

@RestController
@RequestMapping("/products")
public class ProductController 
{
	//Instancia del servicio
	private final TiendaService tiendaService;
	
	public ProductController(TiendaService tiendaService) {
		this.tiendaService = tiendaService;
	}
	
	@GetMapping("/{id}")
	public Product getProduct(@PathVariable("id") int id)
	{

		return this.tiendaService.getProductById(id);
	}
	
	@GetMapping
	public List<Product> getProducts()
	{
		return this.tiendaService.getProducts();
	}
	
	@PostMapping("/admin/addP")
	public boolean addProduct(@RequestBody Product product) {
		return tiendaService.addProduct(product);
	}
	
	@GetMapping("/porprecio")
	public String getProductsByRangePrice(@RequestParam double precioB,
			@RequestParam double precioA)
	{
		return "El rango es "+precioB + " y "+precioA;
	}
	
}
