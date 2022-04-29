import React from "react";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  error: null | string;
  loading: boolean;
}

export default function List<T>(props: ListProps<T>) {
  if (props.error) {
    return <h1>{props.error}</h1>;
  }
  if (props.loading) {
    return <h1>Loading...</h1>;
  }
  return <div className="list">{props.items.map(props.renderItem)}</div>;
}
