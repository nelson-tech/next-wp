type HierarchyElement = {
  [key: string]: any
  id: number | null
  parent: number | null
}

export const buildHierarchy = (arr: HierarchyElement[]) => {
  let parents: HierarchyElement[] = arr.filter((item) => item.parent === 0)
  let children: {
    [key: number]: (HierarchyElement & {
      ancestor: HierarchyElement | undefined
    })[]
  } = {}

  // Hash the children based on parent
  arr.forEach((item, i) => {
    if (!item.parent || item.parent === 0) return
    if (!children[item.parent]) {
      children[item.parent] = [
        { ...item, ancestor: arr.find((i) => i.id === item.parent) },
      ]
    } else {
      children[item.parent].push({
        ...item,
        ancestor: arr.find((i) => i.id === item.parent),
      })
    }
  })

  // function to recursively build the tree
  var findChildren = function (parent: HierarchyElement) {
    if (parent.id && children[parent.id]) {
      parent.children = children[parent.id]
      if (parent.children.length > 0) {
        parent.children.forEach(findChildren)
      }
    }
  }

  // enumerate through to handle the case where there are multiple roots
  parents.forEach(findChildren)

  return parents
}
