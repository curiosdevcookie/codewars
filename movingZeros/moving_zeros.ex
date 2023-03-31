# Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

# moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

defmodule MovingZeros do
  def moving_zeros (list)do
    list = [0,0,"test", :atom, 0, 9, 0,];
    Enum.filter(list, fn x -> x !== 0 end) ++ Enum.filter(list, fn x -> x === 0 end)
  end
end
