package fr.turmo.gameOfLife.application;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class CellDto {
    private boolean isAlive;

    @JsonCreator
    public CellDto(
            @JsonProperty("alive") boolean isAlive
    ) {
        this.isAlive = isAlive;
    }

    public boolean isAlive() {
        return isAlive;
    }
}
