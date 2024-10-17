package com.decroly.cinesadaw.model;


public class Cine {

    private String cod;
    private int aforo;
    private String Nombre;
    private String direccion;

    public Cine(String Nombre, int aforo, String cod, String direccion) {
        this.Nombre = Nombre;
        this.aforo = aforo;
        this.cod = cod;
        this.direccion = direccion;
    }


    public String getCod() {
        return cod;
    }
    public void setCod(String cod) {
        this.cod = cod;
    }
    public int getAforo() {
        return aforo;
    }
    public void setAforo(int aforo) {
        this.aforo = aforo;
    }
    public String getNombre() {
        return Nombre;
    }
    public void setNombre(String nombre) {
        Nombre = nombre;
    }
    public String getDireccion() {
        return direccion;
    }
    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

}
