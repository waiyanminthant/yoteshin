// function to capitalize every first letter of the phrase
export function capLetters(phrase) {

  const sanitizedPhrase = phrase.replaceAll("_", " ")
  const finalPhrase = sanitizedPhrase.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

  return <div>{finalPhrase}</div>;
}