# Complete the solution so that the function will break up camel casing, using a space between words.

# Example

# "camelCasing"  =>  "camel Casing"
# "identifier"   =>  "identifier"
# ""             =>  ""

string = "camelCasing"

defmodule CamelCasing do
  def solution(string) do
    string
    |> String.split("/(?=[A-Z])/")
    |> Enum.join(" ")
  end
end
