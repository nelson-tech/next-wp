type HierarchyElement = {
  [key: string]: any
  id: number | null
  parent: number | null
}

export const buildHierarchy = (arr: HierarchyElement[] | null) => {
  if (!arr) return null

  const parents: HierarchyElement[] = arr.filter((item) => item.parent === 0)
  const children: {
    [key: number]: (HierarchyElement & {
      ancestor: HierarchyElement | undefined
    })[]
  } = {}

  // Hash the children based on parent
  arr.forEach((item, i) => {
    if (!item.parent || item.parent === 0) return

    // Get parent without appended children - avoids circular reference
    let parent = arr
      .map((p: HierarchyElement) => {
        const { children, ...ancestor } = p
        return ancestor
      })
      .find((i) => i.id === item.parent)

    if (!children[item.parent]) {
      children[item.parent] = [{ ...item, ancestor: parent }]
    } else {
      children[item.parent].push({
        ...item,
        ancestor: parent,
      })
    }
  })

  // Recursively build the tree
  const findChildren = (parent: HierarchyElement) => {
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
