const isSymmetric = (root) => {
    const isMirrorTree = (t1, t2) => {
        if (t1 == null && t2 == null) {
            return true
        }

        if (t1 == null || t2 == null) {
            return false
        }

        return (t1.val == t2.val) && isMirrorTree(t1.right, t2.left) && isMirrorTree(t1.left, t2.right)
    }

    return isMirrorTree(root, root)
}