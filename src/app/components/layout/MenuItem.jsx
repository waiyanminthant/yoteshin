import Link from "next/link";

export function MenuItem({ title, url, Icon }) {
    return (
        <div>
            <Link href={url} className="flex gap-2 items-center hover:text-teal-400">
                <Icon className="text-xl sm:hidden" />
                <div className="hidden sm:inline">{title}</div>
            </Link>
        </div>
    );
}