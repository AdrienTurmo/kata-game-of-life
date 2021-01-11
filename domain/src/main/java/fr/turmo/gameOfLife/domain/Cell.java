package fr.turmo.gameOfLife.domain;

import java.util.Objects;

public class Cell {
    private State state;

    private Cell(State state) {
        this.state = state;
    }

    public static Cell aliveCell() {
        return new Cell(State.ALIVE);
    }

    public static Cell deadCell() {
        return new Cell(State.DEAD);
    }

    public boolean isAlive() {
        return State.ALIVE.equals(state);
    }

    public Cell nextState(int aliveNeighbours) {
        switch (state) {
            case ALIVE:
                return (aliveNeighbours == 2 || aliveNeighbours == 3) ? aliveCell() : deadCell();
            case DEAD:
                return (aliveNeighbours == 3) ? aliveCell() : deadCell();
            default:
                return this;
        }
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Cell cell = (Cell) o;
        return state == cell.state;
    }

    @Override
    public int hashCode() {
        return Objects.hash(state);
    }
}
