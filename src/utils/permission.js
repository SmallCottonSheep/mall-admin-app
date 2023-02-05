/** *
 * 存储的是，角色对应的权限名称
 */

const roleToRouter = {
  coustomer: [
    {
      name: 'Product',
    },
    {
      name: 'ProductList',
    },
    {
      name: 'ProductAdd',
    },
  ],
  admin: [
    {
      name: 'Product',
    },
    {
      name: 'ProductList',
    },
    {
      name: 'ProductAdd',
    },
    {
      name: 'Category',
    },
  ],
};

export default function getMenuRoute(role, routes) {
  const allowRoutesName = roleToRouter[role].map((item) => item.name);
  const resultRputer = routes.filter((res) => {
    const obj = res;
    if (allowRoutesName.indexOf(res.name) !== -1) {
      const { children } = obj;
      obj.children = children.filter((r) => allowRoutesName.indexOf(r.name) !== -1);
      return true;
    }
    return false;
  });
  return resultRputer;
}
