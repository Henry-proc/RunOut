import { NavLink } from "react-router-dom";

const links = [
    { to: '/', label: 'Home', end: true },
    { to: '/climbs', label: 'Climbs', end: false },
    { to: '/log', label: 'Logbook', end: false },
    { to: '/profile', label: 'Profile', end: false },
];

export default function Navbar() {
    return (
        <nav className="bg-emerald-900 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
                <span className="text-white font-bold text-lg tracking-widest uppercase">
                    RunOut
                </span>
                <div className="flex gap-1">
                    {links.map(({ to, label, end }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={end}
                            className={({ isActive }) =>
                                `px-4 py-2 rounded text-sm font-medium transition-colors duration-150 ${
                                    isActive
                                        ? 'bg-white/20 text-white'
                                        : 'text-emerald-100 hover:bg-white/10 hover:text-white'
                                }`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
}