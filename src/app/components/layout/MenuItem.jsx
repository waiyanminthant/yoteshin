import Link from "next/link";

//function to render the Menu Items in the Header Bar
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