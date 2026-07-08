import React from 'react';
import { getAvatarUrl, AvatarOptions } from 'fn-ui-avatars';

export interface AvatarProps extends AvatarOptions, Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
	name: string;
}

export const Avatar: React.FC<AvatarProps> = ({
	name,
	size,
	fontSize,
	length,
	rounded,
	color,
    palette,
	format,
	baseUrl,
	alt,
	...rest
}) => {
    const rawOptions = { size, fontSize, length, rounded, color, palette, format, baseUrl };

    const cleanOptions = Object.fromEntries(
        Object.entries(rawOptions).filter(([_, value]) => value !== undefined)
    ) as AvatarOptions;

	const url = getAvatarUrl(name, cleanOptions);

	return (
		<img
			src={url}
			alt={alt || name}
			{...rest}
		/>
	);
};
