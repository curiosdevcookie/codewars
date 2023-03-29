# https://www.codewars.com/kata/526571aae218b8ee490006f4/train/elixir
defmodule CountBits do
  def bits(n) do
    n
    |> Integer.digits(2)
    |> Enum.filter(fn x -> x == 1 end)
    |> Enum.count()
  end
end
