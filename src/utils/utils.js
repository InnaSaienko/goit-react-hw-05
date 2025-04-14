export const formattedName = (name) => {
    return name.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
};

export const getFullImageUrl = (backdropPath) => {
    if (!backdropPath) return null;
    return `https://image.tmdb.org/t/p/w500${backdropPath}`;
};
