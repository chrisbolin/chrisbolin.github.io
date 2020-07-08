import { Children } from "react";

export default function characterCount(thing, count = 0) {
  if (typeof thing === "string") {
    return count + thing.length;
  }
  if (thing.props) return characterCount(thing.props.children, count);

  if (!Array.isArray(thing)) return characterCount([thing], count);

  return thing.reduce(
    (subTotal, element) => characterCount(element, subTotal),
    count
  );
}
