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
	format,
	baseUrl,
	alt,
	...rest
}) => {
	const url = getAvatarUrl(name, {
		size,
		fontSize,
		length,
		rounded,
		color,
		format,
		baseUrl,
	});

	return (
		<img
			src={url}
			alt={alt || name}
			{...rest}
		/>
	);
};
