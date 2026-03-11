import { Send } from "lucide-react";

const JoinAs = () => {
    return (
        <div className="p-6 bg-blue-900 rounded-lg border-l-4 border-blue-400 text-center">
            <p className="text-gray-300 mb-2">
                <span className="font-bold text-lg">Chcesz pracować przy takich projektach?</span>
            </p>
            <p className="text-gray-300">
                Dołącz do Koła Naukowego <span className="font-bold">Cobalt</span> i zobacz, jak wygląda
                chemia poza salą wykładową!
            </p>
            <a
                href="mailto:cobalt.pwr@gmail.com"
                className="w-full mt-2 flex justify-center items-center px-4 py-3 bg-[#1b59af] text-white rounded-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 text-lg font-semibold transition"
            >
                <Send className="w-5 h-5 mr-2" />
                Napisz do nas maila
            </a>
        </div>);
};

export default JoinAs;