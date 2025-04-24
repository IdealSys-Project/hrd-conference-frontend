export default function Preloader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500" />
        </div>
    );
}