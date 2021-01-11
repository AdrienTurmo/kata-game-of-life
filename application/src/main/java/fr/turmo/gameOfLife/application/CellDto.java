package fr.turmo.gameOfLife.application;

public class CellDto {
    private boolean isAlive;

    public CellDto(boolean isAlive) {
        this.isAlive = isAlive;
    }

    public boolean isAlive() {
        return isAlive;
    }
}
