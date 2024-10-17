package com.decroly.cinesadaw.model;

public class Sala {

    private String cod;
    private int aforo;
    private boolean is3D;
    private boolean isVipSeats;
    private boolean isDolbyAtmos;

    public Sala(String cod, int aforo,  boolean is3D, boolean isDolbyAtmos, boolean isVipSeats) {
        this.aforo = aforo;
        this.cod = cod;
        this.is3D = is3D;
        this.isDolbyAtmos = isDolbyAtmos;
        this.isVipSeats = isVipSeats;
    }

    public String getCod() {
        return cod;
    }

    public int getAforo() {
        return aforo;
    }

    public boolean isIs3D() {
        return is3D;
    }

    public boolean isIsVipSeats() {
        return isVipSeats;
    }

    public boolean isIsDolbyAtmos() {
        return isDolbyAtmos;
    }



}
