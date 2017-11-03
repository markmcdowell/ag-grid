// Type definitions for ag-grid v14.0.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { ColumnGroup } from "../entities/columnGroup";
import { Column } from "../entities/column";
import { ColDef, ColGroupDef } from "../entities/colDef";
import { ColumnGroupChild } from "../entities/columnGroupChild";
import { OriginalColumnGroupChild } from "../entities/originalColumnGroupChild";
import { OriginalColumnGroup } from "../entities/originalColumnGroup";
import { RowNode } from "../entities/rowNode";
export declare class ColumnApi {
    private _columnController;
    sizeColumnsToFit(gridWidth: any): void;
    setColumnGroupOpened(group: OriginalColumnGroup | string, newValue: boolean): void;
    getColumnGroup(name: string, instanceId?: number): ColumnGroup;
    getOriginalColumnGroup(name: string): OriginalColumnGroup;
    getDisplayNameForColumn(column: Column, location: string): string;
    getDisplayNameForColumnGroup(columnGroup: ColumnGroup, location: string): string;
    getColumn(key: any): Column;
    setColumnState(columnState: any): boolean;
    getColumnState(): any[];
    resetColumnState(): void;
    getColumnGroupState(): {
        groupId: string;
        open: boolean;
    }[];
    setColumnGroupState(stateItems: ({
        groupId: string;
        open: boolean;
    })[]): void;
    resetColumnGroupState(): void;
    isPinning(): boolean;
    isPinningLeft(): boolean;
    isPinningRight(): boolean;
    getDisplayedColAfter(col: Column): Column;
    getDisplayedColBefore(col: Column): Column;
    setColumnVisible(key: string | Column, visible: boolean): void;
    setColumnsVisible(keys: (string | Column)[], visible: boolean): void;
    setColumnPinned(key: string | Column, pinned: string): void;
    setColumnsPinned(keys: (string | Column)[], pinned: string): void;
    getAllColumns(): Column[];
    getAllGridColumns(): Column[];
    getDisplayedLeftColumns(): Column[];
    getDisplayedCenterColumns(): Column[];
    getDisplayedRightColumns(): Column[];
    getAllDisplayedColumns(): Column[];
    getAllDisplayedVirtualColumns(): Column[];
    moveColumn(key: string | Column, toIndex: number): void;
    moveColumnByIndex(fromIndex: number, toIndex: number): void;
    moveColumns(columnsToMoveKeys: (string | Column)[], toIndex: number): void;
    moveRowGroupColumn(fromIndex: number, toIndex: number): void;
    setColumnAggFunc(column: Column, aggFunc: string): void;
    setColumnWidth(key: string | Column, newWidth: number, finished?: boolean): void;
    setPivotMode(pivotMode: boolean): void;
    isPivotMode(): boolean;
    getSecondaryPivotColumn(pivotKeys: string[], valueColKey: string | Column): Column;
    setValueColumns(colKeys: (string | Column)[]): void;
    getValueColumns(): Column[];
    removeValueColumn(colKey: (string | Column)): void;
    removeValueColumns(colKeys: (string | Column)[]): void;
    addValueColumn(colKey: (string | Column)): void;
    addValueColumns(colKeys: (string | Column)[]): void;
    setRowGroupColumns(colKeys: (string | Column)[]): void;
    removeRowGroupColumn(colKey: string | Column): void;
    removeRowGroupColumns(colKeys: (string | Column)[]): void;
    addRowGroupColumn(colKey: string | Column): void;
    addRowGroupColumns(colKeys: (string | Column)[]): void;
    getRowGroupColumns(): Column[];
    setPivotColumns(colKeys: (string | Column)[]): void;
    removePivotColumn(colKey: string | Column): void;
    removePivotColumns(colKeys: (string | Column)[]): void;
    addPivotColumn(colKey: string | Column): void;
    addPivotColumns(colKeys: (string | Column)[]): void;
    getPivotColumns(): Column[];
    getLeftDisplayedColumnGroups(): ColumnGroupChild[];
    getCenterDisplayedColumnGroups(): ColumnGroupChild[];
    getRightDisplayedColumnGroups(): ColumnGroupChild[];
    getAllDisplayedColumnGroups(): ColumnGroupChild[];
    autoSizeColumn(key: string | Column): void;
    autoSizeColumns(keys: (string | Column)[]): void;
    autoSizeAllColumns(): void;
    setSecondaryColumns(colDefs: (ColDef | ColGroupDef)[]): void;
    columnGroupOpened(group: OriginalColumnGroup | string, newValue: boolean): void;
    hideColumns(colIds: any, hide: any): void;
    hideColumn(colId: any, hide: any): void;
    setState(columnState: any): boolean;
    getState(): any[];
    resetState(): void;
    getAggregationColumns(): Column[];
    removeAggregationColumn(colKey: (string | Column)): void;
    removeAggregationColumns(colKeys: (string | Column)[]): void;
    addAggregationColumn(colKey: (string | Column)): void;
    addAggregationColumns(colKeys: (string | Column)[]): void;
    setColumnAggFunction(column: Column, aggFunc: string): void;
    getDisplayNameForCol(column: any): string;
}
export declare class ColumnController {
    private gridOptionsWrapper;
    private expressionService;
    private balancedColumnTreeBuilder;
    private displayedGroupCreator;
    private autoWidthCalculator;
    private eventService;
    private columnUtils;
    private gridPanel;
    private context;
    private columnAnimationService;
    private autoGroupColService;
    private aggFuncService;
    private valueCache;
    private columnApi;
    private gridApi;
    private primaryBalancedTree;
    private primaryHeaderRowCount;
    private primaryColumns;
    private secondaryBalancedTree;
    private secondaryColumns;
    private secondaryHeaderRowCount;
    private secondaryColumnsPresent;
    private gridBalancedTree;
    private gridColumns;
    private gridHeaderRowCount;
    private displayedLeftColumnTree;
    private displayedRightColumnTree;
    private displayedCentreColumnTree;
    private displayedLeftHeaderRows;
    private displayedRightHeaderRows;
    private displayedCentreHeaderRows;
    private displayedLeftColumns;
    private displayedRightColumns;
    private displayedCenterColumns;
    private allDisplayedColumns;
    private allDisplayedVirtualColumns;
    private allDisplayedCenterVirtualColumns;
    private colSpanActive;
    private rowGroupColumns;
    private valueColumns;
    private pivotColumns;
    private groupAutoColumns;
    private groupDisplayColumns;
    private ready;
    private logger;
    private autoGroupsNeedBuilding;
    private pivotMode;
    private usingTreeData;
    private scrollWidth;
    private scrollPosition;
    private bodyWidth;
    private leftWidth;
    private rightWidth;
    private bodyWidthDirty;
    private viewportLeft;
    private viewportRight;
    init(): void;
    private setVirtualViewportLeftAndRight();
    getDisplayedColumnsStartingAt(column: Column): Column[];
    private checkDisplayedVirtualColumns();
    setVirtualViewportPosition(scrollWidth: number, scrollPosition: number): void;
    isPivotMode(): boolean;
    private isPivotSettingAllowed(pivot);
    setPivotMode(pivotMode: boolean): void;
    getSecondaryPivotColumn(pivotKeys: string[], valueColKey: Column | string): Column;
    private setBeans(loggerFactory);
    private setFirstRightAndLastLeftPinned();
    autoSizeColumns(keys: (string | Column)[]): void;
    autoSizeColumn(key: string | Column): void;
    autoSizeAllColumns(): void;
    private getColumnsFromTree(rootColumns);
    getAllDisplayedColumnGroups(): ColumnGroupChild[];
    getPrimaryColumnTree(): OriginalColumnGroupChild[];
    getHeaderRowCount(): number;
    getLeftDisplayedColumnGroups(): ColumnGroupChild[];
    getRightDisplayedColumnGroups(): ColumnGroupChild[];
    getCenterDisplayedColumnGroups(): ColumnGroupChild[];
    getDisplayedColumnGroups(type: string): ColumnGroupChild[];
    isColumnDisplayed(column: Column): boolean;
    getAllDisplayedColumns(): Column[];
    getAllDisplayedVirtualColumns(): Column[];
    getDisplayedLeftColumnsForRow(rowNode: RowNode): Column[];
    getDisplayedRightColumnsForRow(rowNode: RowNode): Column[];
    private getDisplayedColumnsForRow(rowNode, displayedColumns, filterCallback?, gapBeforeCallback?);
    getAllDisplayedCenterVirtualColumnsForRow(rowNode: RowNode): Column[];
    private isColumnInViewport(col);
    getPinnedLeftContainerWidth(): number;
    getPinnedRightContainerWidth(): number;
    updatePrimaryColumnList(keys: (string | Column)[], masterList: Column[], actionIsAdd: boolean, columnCallback: (column: Column) => void, eventType: string): void;
    setRowGroupColumns(colKeys: (string | Column)[]): void;
    private setRowGroupActive(active, column);
    addRowGroupColumn(key: string | Column): void;
    addRowGroupColumns(keys: (string | Column)[]): void;
    removeRowGroupColumns(keys: (string | Column)[]): void;
    removeRowGroupColumn(key: string | Column): void;
    addPivotColumns(keys: (string | Column)[]): void;
    setPivotColumns(colKeys: (string | Column)[]): void;
    addPivotColumn(key: string | Column): void;
    removePivotColumns(keys: (string | Column)[]): void;
    removePivotColumn(key: string | Column): void;
    private setPrimaryColumnList(colKeys, masterList, eventName, columnCallback);
    setValueColumns(colKeys: (string | Column)[]): void;
    private setValueActive(active, column);
    addValueColumns(keys: (string | Column)[]): void;
    addValueColumn(colKey: (string | Column)): void;
    removeValueColumn(colKey: (string | Column)): void;
    removeValueColumns(keys: (string | Column)[]): void;
    private normaliseColumnWidth(column, newWidth);
    private getPrimaryOrGridColumn(key);
    setColumnWidth(key: string | Column, newWidth: number, finished: boolean): void;
    setColumnAggFunc(column: Column, aggFunc: string): void;
    moveRowGroupColumn(fromIndex: number, toIndex: number): void;
    moveColumns(columnsToMoveKeys: (string | Column)[], toIndex: number): void;
    doesMovePassRules(columnsToMove: Column[], toIndex: number): boolean;
    moveColumn(key: string | Column, toIndex: number): void;
    moveColumnByIndex(fromIndex: number, toIndex: number): void;
    getBodyContainerWidth(): number;
    getContainerWidth(pinned: string): number;
    private updateBodyWidths();
    getValueColumns(): Column[];
    getPivotColumns(): Column[];
    isPivotActive(): boolean;
    getRowGroupColumns(): Column[];
    getDisplayedCenterColumns(): Column[];
    getDisplayedLeftColumns(): Column[];
    getDisplayedRightColumns(): Column[];
    getDisplayedColumns(type: string): Column[];
    getAllPrimaryColumns(): Column[];
    getAllGridColumns(): Column[];
    isEmpty(): boolean;
    isRowGroupEmpty(): boolean;
    setColumnVisible(key: string | Column, visible: boolean): void;
    setColumnsVisible(keys: (string | Column)[], visible: boolean): void;
    setColumnPinned(key: string | Column, pinned: string | boolean): void;
    setColumnsPinned(keys: (string | Column)[], pinned: string | boolean): void;
    private actionOnGridColumns(keys, action, createEvent?);
    getDisplayedColBefore(col: Column): Column;
    getDisplayedColAfter(col: Column): Column;
    isPinningLeft(): boolean;
    isPinningRight(): boolean;
    getPrimaryAndSecondaryAndAutoColumns(): Column[];
    private createStateItemFromColumn(column);
    getColumnState(): any[];
    private orderColumnStateList(columnStateList);
    resetColumnState(): void;
    setColumnState(columnState: any[]): boolean;
    private sortColumnListUsingIndexes(indexes, colA, colB);
    private syncColumnWithNoState(column);
    private syncColumnWithStateItem(column, stateItem, rowGroupIndexes, pivotIndexes);
    getGridColumns(keys: (string | Column)[]): Column[];
    private getColumns(keys, columnLookupCallback);
    getColumnWithValidation(key: string | Column): Column;
    getPrimaryColumn(key: string | Column): Column;
    getGridColumn(key: string | Column): Column;
    private getColumn(key, columnList);
    private getAutoColumn(key);
    private columnsMatch(column, key);
    getDisplayNameForColumn(column: Column, location: string, includeAggFunc?: boolean): string;
    getDisplayNameForColumnGroup(columnGroup: ColumnGroup, location: string): string;
    private getHeaderName(colDef, column, columnGroup, location);
    private wrapHeaderNameWithAggFunc(column, headerName);
    getColumnGroup(colId: string | ColumnGroup, instanceId?: number): ColumnGroup;
    setColumnDefs(columnDefs: (ColDef | ColGroupDef)[]): void;
    isReady(): boolean;
    private extractRowGroupColumns();
    private extractPivotColumns();
    resetColumnGroupState(): void;
    getColumnGroupState(): {
        groupId: string;
        open: boolean;
    }[];
    setColumnGroupState(stateItems: {
        groupId: string;
        open: boolean;
    }[]): void;
    setColumnGroupOpened(key: OriginalColumnGroup | string, newValue: boolean): void;
    getOriginalColumnGroup(key: OriginalColumnGroup | string): OriginalColumnGroup;
    private calculateColumnsForDisplay();
    private checkColSpanActiveInCols(columns);
    private calculateColumnsForGroupDisplay();
    getGroupDisplayColumns(): Column[];
    private createColumnsToDisplayFromValueColumns();
    private updateDisplayedColumns();
    isSecondaryColumnsPresent(): boolean;
    setSecondaryColumns(colDefs: (ColDef | ColGroupDef)[]): void;
    private processSecondaryColumnDefinitions(colDefs);
    private copyDownGridColumns();
    private clearDisplayedColumns();
    private updateGroupsAndDisplayedColumns();
    private updateDisplayedColumnsFromTrees();
    private setupAllDisplayedColumns();
    private setLeftValues();
    private setLeftValuesOfColumns();
    private setLeftValuesOfGroups();
    private addToDisplayedColumns(displayedColumnTree, displayedColumns);
    private updateDisplayedCenterVirtualColumns();
    getVirtualHeaderGroupRow(type: string, dept: number): ColumnGroupChild[];
    private updateDisplayedVirtualGroups(virtualColIds);
    private updateVirtualSets();
    private filterOutColumnsWithinViewport();
    sizeColumnsToFit(gridWidth: any): void;
    private buildDisplayedTrees(visibleColumns);
    private updateGroups();
    getGroupAutoColumns(): Column[];
    private createGroupAutoColumnsIfNeeded();
    private createValueColumns();
    private getWidthOfColsInList(columnList);
    getGridBalancedTree(): OriginalColumnGroupChild[];
}