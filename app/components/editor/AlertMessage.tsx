interface AlertMessageProps {
  type: "error" | "success";
  message: string;
}

export function AlertMessage({ type, message }: AlertMessageProps) {
  const styles = {
    error: "bg-red-50 border-red-200 text-red-800",
    success: "bg-green-50 border-green-200 text-green-800",
  };

  return (
    <div className={`mb-6 p-4 border rounded-lg ${styles[type]}`}>
      <p>{message}</p>
    </div>
  );
}
