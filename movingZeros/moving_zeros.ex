# Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

# moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

defmodule MovingZeros do
  def moving_zeros (arr)do
    arr = [false,1,0,1,2,0,1,3,"a"];
    Enum.filter(arr, fn x -> x !== 0 end) ++ Enum.filter(arr, fn x -> x === 0 end)
  end
end
