#https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/elixir

# Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

# For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

# [10, 343445353, 3453445, 3453545353453] should return 3453455.

defmodule SmallSummer do
  numbers = [19, 5, 42, 2, 77]
  def sum_two_smallest_numbers(numbers) do
    numbers
    |> Enum.sort()
    |> Enum.take(2)
    |> Enum.reduce(&+/2)
  end
end
