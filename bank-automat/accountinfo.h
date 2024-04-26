#ifndef ACCOUNTINFO_H
#define ACCOUNTINFO_H

#include <QDialog>

namespace Ui {
class accountInfo;
}

class accountInfo : public QDialog
{
    Q_OBJECT

public:
    explicit accountInfo(QWidget *parent = nullptr);
    ~accountInfo();

    void setBalance(const QString &newBalance);

private:
    Ui::accountInfo *ui;
    QString balance;
};

#endif // ACCOUNTINFO_H
