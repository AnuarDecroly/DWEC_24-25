package com.decroly.dawnesa.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "salas")
public class Sala {

    @Id
	@Column (name = "cod_sala", columnDefinition = "varchar(20) not null")
	private String codSala;
	
	@Column (name = "aforo", columnDefinition = "int(10) unsigned not null")
	private int aforo;
	
	@Column (name = "is_imax", columnDefinition = "tinyint(1) not null")
	private boolean isIMAX;
	
	@Column (name = "is_3d", columnDefinition = "tinyint(1) not null")
	private boolean is3D;
	
	@Column (name = "is_dolby_atmos", columnDefinition = "inyint(1) not null")
	private boolean isDolbyAtmos;
	
	@Column (name = "n_filas", columnDefinition = "int(10) unsigned not null")
	private int nFilas;

    @ManyToOne
    @JoinColumn (name = "cod_cine", columnDefinition = "varchar(10) not null")
    private Cine cine;


    public Sala()
	{
		
	}
	
	public Sala(String codSala, int aforo, boolean isIMAX, boolean is3d, boolean isDolbyAtmos, int nFilas,
			Cine cine) {
		this.codSala = codSala;
		this.aforo = aforo;
		this.isIMAX = isIMAX;
		is3D = is3d;
		this.isDolbyAtmos = isDolbyAtmos;
		this.nFilas = nFilas;
		this.cine = cine;
	}

    public String getCodSala(){
        return this.codSala;
    }

    public int getAforo() {
        return aforo;
    }

    public void setAforo(int aforo) {
        this.aforo = aforo;
    }

    public boolean isIMAX() {
        return isIMAX;
    }

    public void setIMAX(boolean isIMAX) {
        this.isIMAX = isIMAX;
    }

    public boolean isIs3D() {
        return is3D;
    }

    public void setIs3D(boolean is3d) {
        is3D = is3d;
    }

    public boolean isDolbyAtmos() {
        return isDolbyAtmos;
    }

    public void setDolbyAtmos(boolean isDolbyAtmos) {
        this.isDolbyAtmos = isDolbyAtmos;
    }

    public int getnFilas() {
        return nFilas;
    }

    public void setnFilas(int nFilas) {
        this.nFilas = nFilas;
    }

    public Cine getCine() {
        return this.cine;
    }

    public void setCine(Cine cine) {
        this.cine = cine;
    }

    
}
