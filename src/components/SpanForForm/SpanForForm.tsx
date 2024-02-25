type propsSpanForForm = {
  message: string;
};

function SpanForForm({ message }: propsSpanForForm): JSX.Element {
  return <span>{message}</span>;
}

export default SpanForForm;
