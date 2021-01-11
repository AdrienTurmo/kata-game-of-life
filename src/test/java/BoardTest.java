import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

class BoardTest {

    public static final Cell[][] EMPTY_BOARD = new Cell[][]{
            {Cell.deadCell(), Cell.deadCell(), Cell.deadCell()},
            {Cell.deadCell(), Cell.deadCell(), Cell.deadCell()},
            {Cell.deadCell(), Cell.deadCell(), Cell.deadCell()},
    };

    @Test
    void should_return_same_board_given_board_with_no_alive_cell() {
        Board board = new Board(EMPTY_BOARD);

        Board nextBoard = board.nextState();

        Assertions.assertThat(nextBoard.getBoard()).isEqualTo(board.getBoard());
    }

    @Test
    void should_return_empty_board_given_only_one_cell() {
        Board board = new Board(new Cell[][]{
                {Cell.deadCell(), Cell.deadCell(), Cell.deadCell()},
                {Cell.deadCell(), Cell.aliveCell(), Cell.deadCell()},
                {Cell.deadCell(), Cell.deadCell(), Cell.deadCell()},
        });

        Board nextBoard = board.nextState();

        Assertions.assertThat(nextBoard.getBoard()).isEqualTo(EMPTY_BOARD);
    }

    @Test
    void a_cell_becomes_alive_if_she_has_three_alive_neighbours_and_stay_alive_if_she_has_two() {
        Board board = new Board(new Cell[][]{
                {Cell.aliveCell(), Cell.aliveCell(), Cell.deadCell()},
                {Cell.aliveCell(), Cell.deadCell(), Cell.deadCell()},
                {Cell.deadCell(), Cell.deadCell(), Cell.deadCell()},
        });

        Board nextBoard = board.nextState();

        Assertions.assertThat(nextBoard.getBoard()).isEqualTo(
                new Cell[][]{
                        {Cell.aliveCell(), Cell.aliveCell(), Cell.deadCell()},
                        {Cell.aliveCell(), Cell.aliveCell(), Cell.deadCell()},
                        {Cell.deadCell(), Cell.deadCell(), Cell.deadCell()},
                }
        );
    }

    @Test
    void a_cell_die_if_she_hase_four_or_more_neighbours_or_less_than_two() {
        Board board = new Board(new Cell[][]{
                {Cell.aliveCell(), Cell.aliveCell(), Cell.deadCell()},
                {Cell.aliveCell(), Cell.aliveCell(), Cell.aliveCell()},
                {Cell.deadCell(), Cell.deadCell(), Cell.deadCell()},
        });

        Board nextBoard = board.nextState();

        Assertions.assertThat(nextBoard.getBoard()).isEqualTo(
                new Cell[][]{
                        {Cell.aliveCell(), Cell.deadCell(), Cell.aliveCell()},
                        {Cell.aliveCell(), Cell.deadCell(), Cell.aliveCell()},
                        {Cell.deadCell(), Cell.aliveCell(), Cell.deadCell()},
                }
        );
    }
}
