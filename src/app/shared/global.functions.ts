 /*Dizi içerisinde id ye göre kontrol yapıp gönderilen eleman varsa günceller yoksa ekler */
 export function addOrUpdate(rows: any[], item: any, key: string): any[] {
    rows = rows.map((item: any) =>
        Object.assign({}, item, { selected: false })
    );
    let isEdit: boolean = false;
    // key yok ise default id üzerinden arama yap.
    if (!key) {
        key = 'id';
    }

    // kullanıcı tarafından girilen key datalar da yok ise hata göster.
    if (!item[key] && !rows[0][key]) {
        rows.push(item);
    } else {
        isEdit = rows.some((s) => s[key] === item[key]);
    }

    if (isEdit) {
        rows.map((el, index, arr) => {
            if (el[key] === item[key]) {
                arr[index] = item;
            }
        });
    } else {
        rows = [...rows];
        rows.push(item);
        return rows;
    }
    rows = [...rows];
    return rows;
}