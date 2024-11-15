package com.decroly.tiendagame.repository;

import java.time.LocalDate;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.decroly.tiendagame.model.Product;
import com.decroly.tiendagame.model.Videojuego;

@Repository
public class ProductRepository 
{
	private List<Product> almacen;
	
	public ProductRepository()
	{
		this.almacen = new LinkedList<Product>();
		
		Product p = new Product();
		p.setId(0);
		p.setNombre("Zelda");
		p.setfLanzamiento(new Date().getTime());
		
		this.almacen.add(p);
	}
	
	
	public Product getProductById(int id)
	{
		return this.almacen.stream().filter(p -> p.getId() == id).findFirst().orElse(null);
	}
	
	public List<Product> getAllProducts()
	{
		return this.almacen;
	}
	
	
	public List<Videojuego> getVideojuegosByConsola(String consola)
	{
		List<Videojuego> consulta = new LinkedList<Videojuego>();
		
		//this.almacen.stream().filter(p -> p instanceof Videojuego).filter(v -> ((Videojuego)v).getConsola().equalsIgnoreCase(consola)).toList();
		
		if(this.almacen != null) {
			for(Product p : this.almacen) 
			{
				if(p instanceof Videojuego)
				{
					Videojuego v = (Videojuego)p;
					
					if(v.getConsola().equalsIgnoreCase(consola) || v.getConsola().equalsIgnoreCase("Todas"))
					{
						consulta.add(v);
					}
				}
			}
		}
			
		return consulta;
	}
	
	public boolean addProduct(Product p)
	{
		return this.almacen.add(p);
	}
	
}
