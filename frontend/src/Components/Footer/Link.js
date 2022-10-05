import React from "react";

export default function Link(props) {
  return (
    <p>
      <a href={props.href}>{props.linkName}</a>
    </p>
  );
}
