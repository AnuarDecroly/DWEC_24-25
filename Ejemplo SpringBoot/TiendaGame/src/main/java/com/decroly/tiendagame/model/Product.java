package com.decroly.tiendagame.model;

public class Product 
{
		

	private int id;
	private String nombre;
	private String sn;
	private String descripcion;
	private double precio;
	private int cantidad;
	private String edicion;
	private long fLanzamiento;
	
	
	public Product(int id, String nombre, String sn, String descripcion, double precio, int cantidad, String edicion,
			long fLanzamiento) {
		this.id = id;
		this.nombre = nombre;
		this.sn = sn;
		this.descripcion = descripcion;
		this.precio = precio;
		this.cantidad = cantidad;
		this.edicion = edicion;
		this.fLanzamiento = fLanzamiento;
	}


	public Product() {
		// TODO Auto-generated constructor stub
	}


	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}


	/**
	 * @param id the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}


	/**
	 * @return the nombre
	 */
	public String getNombre() {
		return nombre;
	}


	/**
	 * @param nombre the nombre to set
	 */
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	/**
	 * @return the sn
	 */
	public String getSn() {
		return sn;
	}


	/**
	 * @param sn the sn to set
	 */
	public void setSn(String sn) {
		this.sn = sn;
	}


	/**
	 * @return the descripcion
	 */
	public String getDescripcion() {
		return descripcion;
	}


	/**
	 * @param descripcion the descripcion to set
	 */
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}


	/**
	 * @return the precio
	 */
	public double getPrecio() {
		return precio;
	}


	/**
	 * @param precio the precio to set
	 */
	public void setPrecio(double precio) {
		this.precio = precio;
	}


	/**
	 * @return the cantidad
	 */
	public int getCantidad() {
		return cantidad;
	}


	/**
	 * @param cantidad the cantidad to set
	 */
	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}


	/**
	 * @return the edicion
	 */
	public String getEdicion() {
		return edicion;
	}


	/**
	 * @param edicion the edicion to set
	 */
	public void setEdicion(String edicion) {
		this.edicion = edicion;
	}


	/**
	 * @return the fLanzamiento
	 */
	public long getfLanzamiento() {
		return fLanzamiento;
	}


	/**
	 * @param fLanzamiento the fLanzamiento to set
	 */
	public void setfLanzamiento(long fLanzamiento) {
		this.fLanzamiento = fLanzamiento;
	}
	
	
	
	
}

