'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3, LayoutDashboard, Menu, X } from 'lucide-react';

const links = [
  { href: '/admin', label: 'Operations', icon: LayoutDashboard },
  { href: '/admin/analytics', label: 'Analytics', icon: BarChart3 }
];

export default function Sidebar({ open, onClose }) {
  const pathname = usePathname();

  return (
    <>
      {open && (
        <button
          type="button"
          onClick={onClose}
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          aria-label="Close sidebar"
        />
      )}
      <aside className={`fixed lg:static z-40 inset-y-0 left-0 w-64 bg-navy-900 text-white flex-shrink-0 transform transition-transform ${open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="h-full flex flex-col">
          <div className="h-16 border-b border-navy-700 px-4 flex items-center justify-between">
            <div>
              <p className="font-display text-2xl text-white">Oceanus</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-steel-300">Operations</p>
            </div>
            <button type="button" onClick={onClose} className="lg:hidden p-2 text-steel-300 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="p-3 space-y-1 flex-1">
            {links.map((link) => {
              const Icon = link.icon;
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded text-sm font-medium transition-colors ${
                    active ? 'bg-navy-700 text-white' : 'text-steel-300 hover:bg-navy-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="p-3 border-t border-navy-700 lg:hidden">
            <button type="button" onClick={onClose} className="w-full bg-navy-700 text-white px-3 py-2 rounded text-sm inline-flex items-center justify-center gap-2">
              <Menu className="w-4 h-4" />
              Close Menu
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
