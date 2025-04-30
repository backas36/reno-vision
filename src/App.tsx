import { Button } from "@/components/ui/button";

function App() {
    return (
        <div className='flex h-screen flex-col items-center justify-center'>
            <Button onClick={() => alert("Hello, World!")}>Click me</Button>
        </div>
    );
}

export default App;
