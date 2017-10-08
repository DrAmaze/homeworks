class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    until @game_over
      take_turn
    end
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence
    if !@game_over
      round_success_message
      @sequence_length += 1
    end
  end

  def show_sequence
    add_random_color

    @seq.each_with_index do |color, i|
      puts "color number #{i+1} is #{color}"
      i = 0
      sleep(3)  # allow user time to memorize sequence
    end
    system("clear")
  end

  def require_sequence
    @seq.each_with_index do |color, i|
      puts "Color number #{i+1} is: "
      guess = gets.chomp
      if guess != color
        @game_over = true
        break
      end
    end
  end

  def add_random_color
    @seq << COLORS.sample
  end

  def round_success_message
    puts "You got #{@sequence_length} color(s) memorized!"
  end

  def game_over_message
    puts "You must've missed one, homie. Let's play again!"
  end

  def reset_game
    @sequence_length = 1
    @seq = []
    @game_over = false
  end
end
