// 设置到本地
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}

// 获取本地数据
export const getItem = (key) => {
  const data = localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}

// 删除单个数据
export const removeItem = (key) => {
  localStorage.removeItem(key)
}

// 删除所有数据
export const removeAllItem = () => {
  localStorage.clear()
}
