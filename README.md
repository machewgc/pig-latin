## Synopsis

This is a program that determines if a given year is a leap year.

## Code Example

N/A

## Motivation

To learn how to properly organize business logic and interface logic

## Tests

For words that start with a vowel, add "ay" to the end.
  Example input: Echo
  Example output: Echoay
For words that start with one or more consonants, move all of the first consecutive consonants to the end and add "ay".
  Example input: Trail
  Example output: Ailtray
If the first consonants include "qu", move the "u" along with the "q".
  Example input: Quail
  Example output: Ailquay
Don't forget about words like "squeal" where the "qu" doesn't come first!
  Example input: squeal
  Example output: Ealsquay
For words that start with "y", treat the "y" as a consonant.
  Example input: Yard
  Example output: Ardyay

## License

N/A
