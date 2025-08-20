type ImageModule = {
  default: string;
};

const modules = import.meta.glob<ImageModule>('../../assets/skills/*.{png,jpg,jpeg,svg}', { eager: true });

export const data = Object.entries(modules).map(([path, mod]) => {
  // Extract the filename from the path
  const name = path.split('/').pop()?.split('.')[0] || '';

  return {
    name,
    src: mod.default
  };
});