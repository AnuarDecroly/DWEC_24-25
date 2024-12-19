package com.decroly.dawnesa.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "cine")
public class Cine {

    @Id
    @Column(name = "cod_cine", columnDefinition= "varchar(10) not null")
    private String codCine;

    @Column(name = "direccion", columnDefinition= "varchar(100) not null")
    private String direccion;

    @Column (name = "telefono", columnDefinition = "varchar(9) not null")
	private String telefono;
	
	@Column (name = "e-mail", columnDefinition = "varchar(45) not null")
	private String email;
	
	@Column (name = "horario", columnDefinition = "varchar(100) not null")
	private String horario;


    public Cine(){}

    public Cine(String codCine, String direccion, String telefono, String email, String horario) 
	{
		this.codCine = codCine;
		this.direccion = direccion;
		this.telefono = telefono;
		this.email = email;
		this.horario = horario;
	}

    public String getCodCine() {
        return codCine;
    }

    public void setCodCine(String codCine) {
        this.codCine = codCine;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getHorario() {
        return horario;
    }

    public void setHorario(String horario) {
        this.horario = horario;
    }

    
}
