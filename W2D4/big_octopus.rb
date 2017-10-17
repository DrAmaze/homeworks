# fish = ["fish", "fiiish", "fiiiiish",
  # "fiiiish", "fffish", "ffiiiiisshh", "fsh", "fiiiissshhhhhh"]

def sluggish(fish)
  fish.each_with_index do |fish1, i1|
    max_length = true

    fish.each_with_index do |fish2, i2|
      next if i1 == i2
      max_length = false if fish2.length > fish1.length
    end

    return fish1 if max_length
  end
end

def dominant(fish)

  merge_sort(fish) { |el1, el2| el1.length  <=> el2.length }.last

end
def merge_sort (array, &prc)
  return array if array.length <= 1

  mid_idx = array.length / 2
  merge(
    merge_sort(array.take(mid_idx), &prc),
    merge_sort(array.drop(mid_idx), &prc),
    &prc
  )
end

def merge(left, right, &prc)
  merged_array = []
  prc = Proc.new { |num1, num2| num1 <=> num2 } unless block_given?
  until left.empty? || right.empty?
    case prc.call(left.first, right.first)
    when -1
      merged_array << left.shift
    when 0
      merged_array << left.shift
    when 1
      merged_array << right.shift
    end
  end

  merged_array + left + right
end

def clever(fish)
  biggest = ""
  fish.each { |el| biggest = el if el.length > biggest.length}
  biggest
end

# tiles_array = ["up", "right-up", "right", "right-down",
# "down", "left-down", "left",  "left-up" ]

def slow_dance(dir, arr)
  arr.each_with_index do |tile, index|
    return index if tile == dir
  end
end

data_structure = {
    "up" => 0,
    "right-up" => 1,
    "right"=> 2,
    "right-down" => 3,
    "down" => 4,
    "left-down" => 5,
    "left" => 6,
    "left-up" => 7
}

def constant_dance(dir, data_structure)
  data_structure[dir]
end
