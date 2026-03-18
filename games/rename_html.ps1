# PowerShell script to rename HTML files
$rootPath = Get-Location
$processedCount = 0

Get-ChildItem -Path $rootPath -Directory | ForEach-Object {
    $folder = $_.FullName
    $folderName = $_.Name
    
    # Skip folders that are not numeric
    if ($folderName -match '^\d+$') {
        Write-Host "Processing folder: $folderName" -ForegroundColor Cyan
        
        $indexHtml = Join-Path $folder "index.html"
        $indexCleanHtml = Join-Path $folder "index_clean.html"
        
        if (Test-Path $indexCleanHtml) {
            Write-Host "  Found index_clean.html" -ForegroundColor Yellow
            
            if (Test-Path $indexHtml) {
                Write-Host "  Renaming index.html to index1.html" -ForegroundColor Gray
                Rename-Item -Path $indexHtml -NewName "index1.html" -Force
            }
            
            Write-Host "  Renaming index_clean.html to index.html" -ForegroundColor Green
            Rename-Item -Path $indexCleanHtml -NewName "index.html" -Force
            
            Write-Host "  ✓ Completed" -ForegroundColor Green
            $processedCount++
        } else {
            Write-Host "  No index_clean.html found, skipping" -ForegroundColor DarkGray
        }
        Write-Host ""
    }
}

Write-Host "=================================" -ForegroundColor Cyan
Write-Host "Total folders processed: $processedCount" -ForegroundColor Green
Write-Host "All done!" -ForegroundColor Green