package com.decroly.tiendagame.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.decroly.tiendagame.model.Product;
import com.decroly.tiendagame.repository.ProductRepository;

@Service
public class TiendaService 
{
	//Instancia al repositorio
	private final ProductRepository productRepository;
	
	
	//Inicializamos el repositorio(es un singleton)
	public TiendaService(ProductRepository productRepository)
	{
		this.productRepository = productRepository;
	}
	
	
	public Product getProductById(int id)
	{
		return this.productRepository.getProductById(id);
	}
	
	public List<Product> getProducts()
	{
		return this.productRepository.getAllProducts();
	}
	
	public boolean addProduct(Product p)
	{
		return this.productRepository.addProduct(p);
	}
	
}
