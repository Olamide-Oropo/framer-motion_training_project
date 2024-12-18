interface SpaceIoIconProps {
    width: string;
    height: string;
    fill?: string;
}

function SpaceIoIcon({ width, height, fill = "#0B0D17" }: SpaceIoIconProps) {
    return (
    <svg width={width} height={height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="24" fill="white" />
        <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24 0C24 0 24 24 0 24C23.5776 24.1714 24 48 24 48C24 48 24 24 48 24C24 24 24 0 24 0Z"
        fill={fill}
        />
    </svg>
    );
}

export default SpaceIoIcon