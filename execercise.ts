type Category = {
    name: string;
    subcategories: Category[];
};

const categories: Category[] = [
    {
        name: 'category1',
        subcategories: [
            {
                name: 'category2',
                subcategories: []
            },
            {
                name: 'category3',
                subcategories: [
                    {
                        name: 'category4',
                        subcategories: []
                    }
                ]
            }
        ]
    },
    {
        name: 'category5',
        subcategories: []
    }
];

const getCategoryPath = (categoryList: Category[], categoryName: string): string | null => {
    let foundPath: Array<string> = [];

    const explore = (groups: Category[], trail: string[]): boolean => {
        for (const group of groups) {
            const currentTrail = [...trail, group.name];

            if (group.name === categoryName) {
                foundPath = currentTrail;
                return true;
            }

            if (group.subcategories.length > 0 && explore(group.subcategories, currentTrail)) {
                return true;
            }
        }
        return false;
    };

    const found = explore(categoryList, []);
    return found ? '/' + foundPath.join('/') : null;
};

// OUTPUT SAMPLES
console.log(getCategoryPath(categories, 'category4')); // should output: '/category1/category3/category4'
console.log(getCategoryPath(categories, 'category2')); // should output: '/category1/category2'
console.log(getCategoryPath(categories, 'category5')); // should output: '/category5'
