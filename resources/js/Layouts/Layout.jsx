import { Head } from '@inertiajs/react';

export default function Layout({ title, children }) {
    return (
        <div>
            <Head title={title} />
            <header>
                <h1>My App</h1>
            </header>
            <main>
                Hi there! This is the layout.
                {children}
            </main>
        </div>
    );
}