import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Button />

      <Card color="blue" title="Primary card title" />
      <Card color="grey" title="Secondary card title" />
      <Card color="green" title="Success card title" />
      <Card color="pink" title="Danger card title" />
      <Card color="yellow" title="Warning card title" />
      <Card color="lightBlue" title="Info card title" />
      <Card color="white" title="Light card title" />
      <Card color="black" title="Dark card title" />
    </>
  );
}

export default App;
